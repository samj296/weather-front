
export async function api(path, options = {}){
    const res = await fetch(path,{
        ...options,
        headers : {
            "content-type": "application/json",
            ...(options.headers || {}) // if I add more header it won't override the existing header
        },
        
    });

    const data = await res.json().catch(() => null)
    if(!res.ok){
        const msg = data?.error || `Request failed (${res.status})`;
        throw new Error(msg);
    };

    return data;
}