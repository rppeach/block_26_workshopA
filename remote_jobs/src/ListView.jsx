import { useEffect, useState } from "react"
import PostList from "./postList"

function ListView ({viewPost}){

    const [jobPosts, setJobPosts] = useState([])
    const [filters, setFilters] = useState([])

    const baseUrl = "https://jobicy.com/api/v2/remote-jobs?count=25"
    let filteredUrl = `${baseUrl}&${filters}`

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(baseUrl)
                console.log(res)
                const data = await res.json()
                console.log(data.jobs)
                setJobPosts(data.jobs)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts()
    }, []);
    console.log(jobPosts)

    return (
        <>
            <h2>Recent Listings</h2>
            <table style={{
            display: "block",
            border: "1px solid whitesmoke",
            height: "50vh",
            overflowY: "scroll",
            position: "sticky",
            botton: "0px"
        }}>
            <tbody>
                <tr style={{
                    position: "sticky",
                    top: "2px",
                    color: "black",
                    backgroundColor: "white",
                }}>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Pay</th>
                    <th>Posted</th>
                </tr>
                {jobPosts.map((post) => {
                    return <PostList key={post.id} post={post} viewPost={viewPost}/>
                })}
            </tbody>
            </table>
        </>
    )
}

export default ListView