import { useEffect, useState } from "react";

function App() {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  const [posts, setPosts] = useState<Post[]>([]);
  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      
      // Correct way to cast the response to Post[]
      setPosts(data as Post[]); // or setPosts(<Post[]>data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {posts.length &&
        posts.map((item) => (
          <div style={{border:"1px solid black", borderRadius:"20px", padding:"20px",marginTop:"20px"}}>
            <h1>
              {item.id}.
              {" "}
              {item.title}
            </h1>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
