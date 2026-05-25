type Params = {
    id:string;
}

async function BlogDetail({ params }: { params: Params }){
    const { id }  = await params;
    return(
        <div className="flex flex-col text-3xl items-center justify-center h-screen gap-5">
            <h1 className="font-bold text-lime-500">ブログ</h1>
            <p className="font-bold text-gray-500">ID:{id}</p>
        </div>
    )
}

export default BlogDetail
