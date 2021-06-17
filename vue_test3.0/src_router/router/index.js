import { createRouter, createWebHashHistory } from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'
const routes = [
	{
		path: "/home",
		name: "Home",
		component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            path:'detail/:id',
            component: MessageDetail
          }
        ]
      },{
        path: '/',
        redirect: '/about'
      }
    ]
    
	},
	{
		path: "/about",
		name: "About",
		component: () =>
			import("../pages/About.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;