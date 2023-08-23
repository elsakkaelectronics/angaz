var postsr=[
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"iuyb",
        price:"o98bp",
        user:""
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
    {
        title:"tvit",
        price:"10$",
        user:"uy6tu"
    },
]
var html =""
var postconstructor = function(){
    for(x in postsr){
        html+=`
        <div class="srvcprvew"style="
        height: 600px;
        width: 20vw;
        border: 1px outset black;
    ">
            <div class="imgprvew"style="
            height: calc(100% - 60px);
            border-bottom: 1px outset black;
            background-image: url(&quot;Operational-Excellence_202.png&quot;);
            background-size: contain;
        "></div>
            <div class="bar"style="
            height: 60px;
            display: flex;
            align-items: center;
        ">
                <div class="user"style="
                height: 89%;
                width: 20%;
                border: 1px outset black;
                border-radius: 100%;
                margin-left: 6px;
                margin-right: 6px;
            "></div><div class="descrption"style="
        height: 100%;
        width: calc(60% 
    + 22px);
        border-left: 1px outset black;
        display:flex;
        flex-direction: column;
        text-align: center;
        background-color:cyan;
    "><p style="margin-top: auto;margin-bottom: auto;font-size: 10px;">
        ${postsr[x].title}</p></div>
    <div class="price"style="
        height: 100%;
        width: 20%;
        display:flex;
        flex-direction: column;
        text-align: center;
    ">
    <p style="margin-top: auto;margin-bottom: auto;font-size: 10px;">${postsr[x].price}</p>
    </div>
            </div>
        </div>
        `
    }
    document.getElementById("grid").innerHTML=html
}
postconstructor()