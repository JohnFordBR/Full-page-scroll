
$(document).ready(function() {
const dheight = $( document ).height();
const secarray = $('.section');
let toppos = [];
for (let i of secarray) {
toppos.push($(i).position().top);
}
const seccount = $('.section').length;
const secheight = dheight/seccount;
let nullpoint = 0;
const lastclass= $('.section').last().attr('class').split(" ")[0];
let scrollbull =true;
setInterval(()=>{scrollbull=true;},300);
$('body').on('DOMMouseScroll', function(e){
  if(scrollbull==true){
scrollbull=false;
      if(e.originalEvent.detail < 0) {

         console.log('valod');
           e.preventDefault();
           console.log(nullpoint);
           if($(`.${lastclass}`).position().top==(dheight-secheight))
           {
             nullpoint=0;
             $('.section').css({
               'transform':`translateY(0)`
             });
           }
           else{
             for (let j of toppos) {
           if($(`.${lastclass}`).position().top==j){
             nullpoint+=1;
             $('.section').css({
               'transform':`translateY(${nullpoint*100}vh)`
             });
           }
             }
           }



      }else {

        console.log('valod');
        e.preventDefault();

          if($(`.${lastclass}`).position().top==0)
          {

              nullpoint=-(seccount-1);
            $('.section').css({
              'transform':`translateY(-${(seccount-1)*100}vh)`
            });
          }
          else{
            for (let j of toppos) {
          if($(`.${lastclass}`).position().top==j){
            nullpoint-=1;
            $('.section').css({
              'transform':`translateY(${nullpoint*100}vh)`
            });
            console.log(`${nullpoint*100}vh`);
          }
            }
          }


      }

}
  });

  $(document).keydown((event)=>{

       if(event.which=='40'){
    //      event.preventDefault();
    //      if($('.section3').position().top==1902)
    //
    //      {
    //        nullpoint-=1;
    //        $('.section').css({
    //          'transform':'translateY(-100vh)'
    //        });
    //      }
    //      else if($('.section3').position().top==951){
    //         nullpoint-=1;
    //        $('.section').css({
    //          'transform':'translateY(-200vh)'
    //        });
    //      }
    //      else if($('.section3').position().top==0){
    //         nullpoint-=1;
    //        $('.section').css({
    //          'transform':'translateY(-200vh)'
    //        });
    //      }
      event.preventDefault();

        if($(`.${lastclass}`).position().top==0)
        {

            nullpoint=-(seccount-1);
          $('.section').css({
            'transform':`translateY(-${(seccount-1)*100}vh)`
          });
        }
        else{
          for (let j of toppos) {
        if($(`.${lastclass}`).position().top==j){
          nullpoint-=1;
          $('.section').css({
            'transform':`translateY(${nullpoint*100}vh)`
          });
          console.log(`${nullpoint*100}vh`);
        }
          }
        }
        }else if (event.which=='38'){
          event.preventDefault();
          console.log(nullpoint);
          if($(`.${lastclass}`).position().top==(dheight-secheight))
          {
            nullpoint=0;
            $('.section').css({
              'transform':`translateY(0)`
            });
          }
          else{
            for (let j of toppos) {
          if($(`.${lastclass}`).position().top==j){
            nullpoint+=1;
            $('.section').css({
              'transform':`translateY(${nullpoint*100}vh)`
            });
          }
            }
          }
        }
        });
  });
