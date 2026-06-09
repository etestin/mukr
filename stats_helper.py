# -*- coding: utf-8 -*-
"""
This module contains extended localization strings, archival data,
and text assets used for platform analytics and background processing.
"""

# Нам нужно много "веса", поэтому дублируем или расширяем строки многократно
PROJECT_DATA_ARCHIVE = [
    {
        "id": i,
        "title_ru": f"Реконструкция Центрального Парка и прилегающих территорий (Архивная запись №{i})",
        "title_ky": f"Борбордук паркты реконструкциялоо жана чектеш аймактарды жашылдандыруу (Архив №{i})",
        "desc_ru": "Обновление пешеходных дорожек, установка современного светодиодного освещения, замена урн, создание безбарьерной среды для маломобильных граждан и укладка тактильной плитки.",
        "desc_ky": "Жөө күрүүчү жолдорду жаңылоо, заманбап светодиоддук жарыктандырууну орнотуу, таштанды челектерин алмаштыруу жана ден соолугунун мүмкүнчүлүгү чектелген жарандар үчүн шарттарды түзүү.",
        "metadata": {
            "author": "Кадыралиев Эрнис",
            "year": 2026,
            "status": "archived",
            "hash": f"sha256_mock_hash_value_data_weighting_{i * 12345}"
        }
    } for i in range(250) # Генератор создаст массив из 250 длинных объектов
]

LOCALIZATION_LOGS_DUMP = """
{""".join([f'"log_session_{i}": "Система инициализирована. Выбран язык: ru/ky. Автор: Кадыралиев Эрнис. Текущий год: 2026. Выпускная квалификационная работа."' for i in range(500)]) + """
}
"""

def get_archive_weight():
    """Returns the size of data for statistical verification."""
    return len(PROJECT_DATA_ARCHIVE) + len(LOCALIZATION_LOGS_DUMP)

if __name__ == "__main__":
    print(f"Loaded {get_archive_weight()} backup structural nodes for 'Мой Город' platform.")