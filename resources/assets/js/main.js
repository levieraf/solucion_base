var Vue = require('vue');

import lv_header from './components/layouts/header.vue';
import lv_sidebarmenu from './components/layouts/sidebarmenu.vue';
import lv_content from './components/layouts/content.vue';
import lv_footer from './components/layouts/footer.vue';

new Vue({
    el: '#app',
    components: {
        lv_header,
        lv_sidebarmenu,
        lv_content,
        lv_footer
    }
});