import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        'errors': {
          'authError': 'Username or password are incorrect.'
        },
        'messages': {
          'emptyList': 'There seems to be nothing here',
          'loading': 'Loading...'
        },
        'buttons': {
          'login': 'Login',
          'logout': 'Logout',
          'delete': 'Delete',
          'loadMore': 'Read more'
        },
        'pages': {
          'profile': 'PROFILE',
          'news': 'NEWS',
          'home': 'HOME'
        },
        'modals': {
          'logout': {
            'description': 'Are you sure you want to log out?',
            'buttons': {
              'agree': 'Log out',
              'disagree': 'Cancel'
            }
          }
        }
      },
      ua: {
        'errors': {
          'authError': 'Ім\'я користувача або пароль введено неправильно.'
        },
        'messages': {
          'emptyList': 'Здається тут пусто =(',
          'loading': 'Завантаження...'
        },
        'buttons': {
          'login': 'Увійти',
          'logout': 'Вийти',
          'delete': 'Видалати',
          'loadMore': 'Читати ще'
        },
        'pages': {
          'profile': 'ПРОФІЛЬ',
          'news': 'НОВИНИ',
          'home': 'ГОЛОВНА'
        },
        'modals': {
          'logout': {
            'description': 'Ви дійсно хочете вийти з акаунта?',
            'buttons': {
              'agree': 'Вийти',
              'disagree': 'Скасувати'
            }
          }
        }
      }
    }
  });


export default i18n;
