// Callback
const posts = [
    {id : 1, title : "Introduction"},
    {id : 2, title : "Chapter 1"}
]

const getPosts = ()=>{
    let lis = '';
    setTimeout(()=>{
             posts.forEach(post=>{
                lis += `<li> ${post.id} - ${post.title} </lt>`;
             })
             document.getElementById("postlist").innerHTML = lis;
    }, 1000);
}

const addPost = (post, callback)=>{
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000)
} 

addPost({id : 3, title : "chapter 3" }, getPosts);

             