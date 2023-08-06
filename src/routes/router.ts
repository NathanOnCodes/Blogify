import { Router } from "express";
import { user_get, users_get } from "./users";
import { posts_get, posts_post, posts_put, posts_delete, posts_feed_get } from "./posts";

const router = Router();

/*
    rotas de user
*/
router.get(`/user`, user_get);
router.get(`users`, users_get);

/*
    rotas de post
*/
router.get(`/posts/:id`, posts_get);
router.get(`/posts/feed`, posts_feed_get);
router.post(`/post`, posts_post);
router.put(`/post/publish/:id`, posts_put);
router.delete(`/post/:id`, posts_delete);

export default router;