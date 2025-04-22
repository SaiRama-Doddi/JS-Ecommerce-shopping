


export async function getProductDetails(){


    const response=await fetch('/Data/data.json');
    const data=await response.json();
    console.log(data);
    return data;

}