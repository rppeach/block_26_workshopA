function ViewDetail ({post, viewPost}){

    return(
        <>
        <img src={post.companyLogo} alt="" />
        <h2>{post.companyName}</h2>
        <h1>{post.jobTitle}</h1>
        <p>{post.jobExcerpt}</p>
        <span><strong>Pay Range:</strong> {
            post.annualSalaryMax?
            <td>${post.annualSalaryMin}-${post.annualSalaryMax}
            <br /></td>
            :
            <td>Undisclosed</td>
        } | {post.salaryCurrency}</span>
        <p><strong>Level:</strong> {post.jobLevel}</p>
        <p><strong>Location:</strong> {post.jobGeo}</p>
        <p><strong>Industry:</strong> {post.jobIndustry}</p>
        <p><strong>Classification:</strong> {post.jobType}</p>
        <p><strong>Site Location:</strong> {post.jobGeo}</p>
        <p><strong>Location:</strong> {post.jobGeo}</p>
        <p>Posted on {post.pubDate}</p>
        <button onClick={()=>{window.location.assign(`${post.url}`)}}>Apply</button> <> </>
        <button onClick={()=>{viewPost(null)}}>Go Back</button>
        <p><strong>Full Job Description:</strong><br />{post.jobDescription}</p>
        </>

    )
}

export default ViewDetail