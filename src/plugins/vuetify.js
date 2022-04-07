import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        options: {
            customProperties: true,
        },
        themes: {
          light: {
            primary: '#1E88E5',
            secondary: '#FFD026',
            accent: '#16A75C',
            placeholder: colors.grey.base, // #3F51B5
          },
        },
      },
});
