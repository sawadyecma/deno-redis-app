export async function getHttpSample(){
    const resp = await fetch("https://zipcloud.ibsnet.co.jp/api/search")
    console.log(resp)
    return resp
}