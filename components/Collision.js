AFRAME.registerComponent("collider", {
    schema:{
        elementID:{type:'string',default:'#coin1'}
    },
    update:function(){
        this.isCollided(this.data.elementID)
    },
    isCollided:function(elementID){
        const element = document.querySelector(elementID)
        element.addEventListener('collide',e =>{
            if(elementID.includes('#coin')){
                console.log(elementID+'Collision')
            }
            if(elementID.includes('#fish')){
                console.log(elementID+'Collision')
            }
        })
            
        
    }
  });
  