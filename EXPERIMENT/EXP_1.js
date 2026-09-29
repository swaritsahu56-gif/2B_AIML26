const EventEmmiter = require('events');
const ud =new EventEmmiter();
ud.on('greet',(name)=>{
    console.log(`warm welcome to ${name}`)
})
ud.on('exit',(num)=>{
    console.log(`thankyou for visit${num}`)
})
ud.emit('greet','Swarit')
ud.emit('exit',100)