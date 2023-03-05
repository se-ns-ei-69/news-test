import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
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
    }
  },
  ua: {
    translation: {
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
};

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development'
  });


export default i18n;
