import React from 'react';
import MyInput from "./IU/input/MyInput";
import MyButton from "./IU/button/MyButton";

const PostForm = () => {
    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            {/*Неуправляемый\ Неконтролируемый компоненит*/}
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>
                Создать пост
            </MyButton>
        </form>
    );
};

export default PostForm;