const taskList = [];

const entryElm = document.getElementById("entryList");
const entryElm = document.getElementById("badList");
const show = document.getElementById("ttlHrs");

const tWKHr = 7*24;

const handleOnSubmit = (form) => {
  const newForm = new FormData(form);

  const task = newForm.get("task");
  const hr = +newForm.get("hr");
  const obj = {
    task,
    hr,
  };

  const previousTtl = total();
if(previousTtl + hr > tWKHr){
    return alert("defef");
}

  taskList.push(obj);

  Display();
  total();
};

const Display = () => {
  let str = "";

  taskList.forEach((item, i) => {
    str += `<tr>
<th>${i + 1}</th>
<td>${item.task}</td>
<td>${item.hr} hrs</td>

<td class="text-end">
<button onclick="handOnDelete(${i})" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
<button class="btn btn-sm btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
</td>
</tr>`;
  });

  entryElm.innerHTML = str;
};


const DisplayBadList = () => {
    let str = "";
  const temArg = taskList.filter((item)=>
    item.type === "bad")

    temArg.forEach((item, i) => {
      str += `<tr>
  <th>${i + 1}</th>
  <td>${item.task}</td>
  <td>${item.hr} hrs</td>
  
  <td class="text-end">
  <button onclick="handOnDelete(${i})" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
  <button class="btn btn-sm btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
  </td>
  </tr>`;
    });
  
    entryElm.innerHTML = str;
  };
const total = ()=>{
    const ttl = taskList.reduce((acc, item)=>{
        return acc + item.hr;
    },0);

    show.innerText = ttl;
    return ttl;
}


const handOnDelete = (id)=>{
    if(window.confirm("Are you sure want to delete the item"))
    {
taskList.splice(id, 1)
Display()
    }
    

};
const switchTask = (id,type) =>{

}


const randomIdGenerator =()=>{

    const idLength = 6
    const str ="qwertyuioplkjhgfdsamnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM1234567890"

    const randomPosition = Math.floor(Math.random()* str.length);
    str[randomPosition];

    for(let i= 0; i <idLength; i++){
        id += str[randomPosition];
    }

    return id;
}