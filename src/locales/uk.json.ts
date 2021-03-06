import { exportAsMessages } from './helpers';

exportAsMessages('_locales/uk/messages.json', {
  extensionName: 'uBlacklist',
  extensionDescription: 'Блокує відображення вибраних вами сайтів у пошукових результатах Google',
  lang: 'uk',
  error: 'Помилка: $1',
  unauthorizedError: 'Не авторизовано. Вимкніть синхронізацію і увімкніть знову.',
  cancelButton: 'Скасувати',
  okButton: 'OK',
  content_singleSiteBlocked: 'uBlacklist заблокував 1 сайт',
  content_multipleSitesBlocked: 'uBlacklist заблокував $1 сайтів',
  content_showBlockedSitesLink: 'Показати',
  content_hideBlockedSitesLink: 'Сховати',
  content_blockSiteLink: 'Заблокувати сайт',
  content_unblockSiteLink: 'Розблокувати сайт',
  popup_blockSiteTitle: 'Заблокувати цей сайт',
  popup_unblockSiteTitle: 'Розблокувати цей сайт',
  popup_details: 'Деталі',
  popup_pageURLLabel: 'URL сторінки',
  popup_pathDepth: 'Depth',
  popup_addedRulesLabel: 'Правила, що додаються',
  popup_removedRulesLabel: 'Правила, що вилучаються',
  popup_blockSiteButton: 'Блокувати',
  popup_unblockSiteButton: 'Розблокувати',
  popup_openOptionsLink: 'Параметри',
  options_generalTitle: 'Загальні',
  options_blacklistLabel: 'Сайти, які прибираються з пошукових результатів Google',
  options_blacklistHelper:
    'Ви можете використовувати [зіставляння з маскою](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) або [регулярні вирази](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).',
  options_blacklistExample: 'Приклад: $1',
  options_blacklistUpdated: 'Оновлено',
  options_reloadBlacklistButton: 'Оновити',
  options_importBlacklistButton: 'Імпорт',
  options_exportBlacklistButton: 'Експорт',
  options_saveBlacklistButton: 'Зберегти',
  options_importBlacklistDialog_title: 'Імпортувати',
  options_importBlacklistDialog_fromFile: 'Імпортувати з файлу',
  options_importBlacklistDialog_selectFile: 'Обрати файл',
  options_importBlacklistDialog_fromPB: 'Імпортувати особистий список',
  options_importBlacklistDialog_pbLabel: 'Домени',
  options_importBlacklistDialog_append: 'Дописати до існуючого списку',
  options_importBlacklistDialog_importButton: 'Імпорт',
  options_importBlacklistDialog_helper: 'Вставте домени з вашого особистого списку.',
  options_otherSearchEngines: 'Інші пошукові рушії',
  options_otherSearchEnginesDescription:
    'Ви можете використовувати це розширення для перелічених нижче пошуковиків.',
  options_registerSearchEngine: 'Дозволити',
  options_searchEngineRegistered: 'Дозволено',
  options_skipBlockDialogLabel: 'Пропускати діялог "Заблокувати цей сайт"',
  options_hideBlockLinksLabel: 'Ховати посилання "Заблокувати сайт"',
  options_hideControlLabel: 'Ховати число блокованих сайтів і ланку "Показати"',
  options_syncTitle: 'Синхронізація',
  options_syncFeatureUpdated:
    'Функцію синхронізації оновлено. Щоб продовжити використання синхронізації натисніть кнопку "Увімкнути".',
  options_syncFeature: 'Синхронізувати з хмарою',
  options_syncFeatureDescription:
    'Ви можете синхронізувати списки блокування зі своїми пристроями через хмару.',
  options_turnOnSync: 'Увімкнути',
  options_turnOnSyncDialog_title: 'Увімкнути синхронізацію',
  options_turnOnSyncDialog_turnOnSyncButton: 'Увімкнути',
  options_turnOffSync: 'Вимкнути',
  options_syncResult: 'Остання синхронізація',
  options_syncNever: 'Не синхронізовано',
  options_syncRunning: 'Синхронізування...',
  options_syncNowButton: 'Синхр. зараз',
  options_syncInterval: 'Період синхронізації',
  options_subscriptionTitle: 'Підписка',
  options_subscriptionFeature: 'Підписатися на списки блокування',
  options_subscriptionFeatureDescription:
    'Якщо ви додасьте підписку, списки блокування реґулярно завантажуватимуться з вказаної URL-адреси.',
  options_addSubscriptionButton: 'Додати джерело',
  options_subscriptionNameHeader: 'Назва',
  options_subscriptionURLHeader: 'URL-адреса',
  options_subscriptionUpdateResultHeader: 'Востаннє оновлено',
  options_subscriptionMenuButtonLabel: 'Меню',
  options_noSubscriptionsAdded: 'Не додано підписок',
  options_subscriptionUpdateRunning: 'Оновлення...',
  options_showSubscriptionMenu: 'Показати',
  options_updateSubscriptionNowMenu: 'Оновити зараз',
  options_removeSubscriptionMenu: 'Вилучити',
  options_updateAllSubscriptionsNowButton: 'Оновити зараз',
  options_addSubscriptionDialog_title: 'Додати джерело',
  options_addSubscriptionDialog_nameLabel: 'Назва',
  options_addSubscriptionDialog_urlLabel: 'URL-адреса',
  options_addSubscriptionDialog_addButton: 'Додати',
  options_showSubscriptionDialog_blacklistLabel: 'Правила',
  options_updateInterval: 'Період оновлення',
  clouds_googleDriveSync: 'Синхр. з Google Drive',
  clouds_googleDriveSyncDescription:
    'Файл створиться в теці програмних даних, яка прихована від користувача.',
  clouds_googleDriveSyncTurnedOn: 'Синхронізовано з Google Drive',
  clouds_dropboxSync: 'Синхр. з Dropbox',
  clouds_dropboxSyncDescription: 'Файл створиться у "/Apps/uBlacklist/".',
  clouds_dropboxSyncTurnedOn: 'Синхронізовано з Dropbox',
  searchEngines_googleName: 'Google',
  searchEngines_bingName: 'Bing',
  searchEngines_duckduckgoName: 'DuckDuckGo',
  searchEngines_ecosiaName: 'Ecosia',
  searchEngines_startpageName: 'Startpage.com',
});
