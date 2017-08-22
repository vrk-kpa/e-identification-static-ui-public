import i18n from 'i18next';

var TranslatedTitle = {
    getTitle: function(key) {
      return i18n.t(key);
    }
};

export default TranslatedTitle;
