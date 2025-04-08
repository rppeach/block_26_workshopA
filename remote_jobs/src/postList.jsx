function PostList ({post, viewPost}){

return(
    <>
        <tr
        style={{
            border: "1px solid white",
            padding: "5px"
        }}
        >
        <td>{post.jobTitle}</td>
        <td>{post.companyName}</td>
        <td>{post.jobGeo}</td>
        { post.annualSalaryMax?

        <td>${post.annualSalaryMin}-${post.annualSalaryMax} <br />{post.salaryCurrency}</td>
        :
        <td>Undisclosed</td>
        }
        <td>{post.pubDate}</td>
        <td><button onClick={()=>{viewPost(post)}}>Get Details</button></td>
        </tr>
    </>
)}

export default PostList