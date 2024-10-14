import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { createPost } from "./api/posts";
import Post from "./Post";

export function CreatePost({setCurrentPage}) {
    const titleRef = useRef()
    const queryClient = useQueryClient()
    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: data => {
            queryClient.invalidateQueries(['posts'], {exact: true})
            setCurrentPage(<Post id={data.id} />)
        }
    })

    function handleSubmit(e) {
        e.preventDefault()
        createPostMutation.mutate({
            title: titleRef.current.value
        })
    }

    return (
        <div>
            {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
            <h1>Create post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" ref={titleRef} />
                </div>
                <button disabled={createPostMutation.isLoading}>
                {createPostMutation.isLoading ? "Loading..." : "Create"}
            </button>
            </form>
        </div>
    )

}