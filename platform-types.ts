/**
 * @file platform-types.ts
 * @description Модуль строгой типизации для архитектуры портала локальных инициатив «Мой Город»
 * @version 1.0.0
 * @author Кадыралиев Эрнис (2026)
 * @project Выпускная квалификационная работа (ВКР)
 */

// Типы ролей пользователей системы взаимодействия граждан и муниципалитета
export type UserRole = 'guest' | 'resident' | 'moderator' | 'administrator';

// Статусы жизненного цикла предложенных городских проектов
export type InitiativeStatus = 'moderation' | 'active' | 'accepted' | 'declined' | 'implemented';

// Категории городских проблем и инициатив для панели фильтрации
export type InfrastructureCategory = 'parks' | 'lighting' | 'roads' | 'ecology' | 'transport';

/**
 * Интерфейс учетной записи пользователя платформы
 */
export interface IPlatformUser {
    readonly uid: string;              // Уникальный идентификатор
    fullName: string;                  // Фио гражданина (например, Кадыралиев Эрнис)
    email: string;                     // Электронная почта / Логин
    role: UserRole;                    // Роль в системе управления
    registrationDate: string;          // Дата создания аккаунта
    submittedInitiativesCount: number; // Количество предложенных идей
    isVerifiedByGov: boolean;          // Проверен ли профиль через госсистемы
}

/**
 * Интерфейс для сущности "Городская инициатива" (Проект)
 */
export interface ICivicInitiative {
    id: number;                        // Идентификатор записи
    titleRu: string;                   // Название проекта на русском языке
    titleKy: string;                   // Название проекта на кыргызском языке
    descriptionRu: string;             // Подробное описание на русском
    descriptionKy: string;             // Подробное описание на кыргызском
    category: InfrastructureCategory;  // Категория инфраструктуры
    authorId: string;                  // ID автора предложения
    authorName: string;                // Отображаемое имя автора
    votesCount: number;                // Текущее количество набранных голосов
    status: InitiativeStatus;          // Статус модерации/выполнения
    createdAt: string;                 // Дата публикации инициативы
    imageUrl?: string;                 // Ссылка на фото текущего состояния объекта
    moderatorComment?: string;         // Комментарий администратора в случае отклонения
}

/**
 * Интерфейс для структуры транзакции голосования (для защиты от накруток)
 */
export interface IVoteTransaction {
    transactionId: string;
    userId: string;
    initiativeId: number;
    timestamp: number;
    userClientIp: string;
}

/**
 * Конфигурационная схема настроек доступности (Версия для слабовидящих)
 */
export interface IAccessibilityConfig {
    fontSize: 'normal' | 'medium' | 'large';
    contrastMode: 'normal' | 'high-contrast' | 'dark-mode';
    letterSpacing: 'normal' | 'medium' | 'wide';
    lineHeight: 'normal' | 'relaxed';
    showImages: boolean;
    underlineLinks: boolean;
}

/**
 * Класс-хелпер для валидации данных, отправляемых через форму "Предложить идею"
 */
export class InitiativeValidator {
    public static validateTitle(title: string): boolean {
        return title.trim().length >= 10 && title.trim().length <= 100;
    }

    public static validateDescription(desc: string): boolean {
        return desc.trim().length >= 30 && desc.trim().length <= 1500;
    }

    public static canUserVote(user: IPlatformUser, initiative: ICivicInitiative): boolean {
        // Логика: автор не может голосовать за свой собственный проект
        if (user.role === 'guest') return false;
        return initiative.authorId !== user.uid;
    }
}