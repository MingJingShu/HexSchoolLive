
$(document).ready(function(){
    console.log('ok');
    let pageClassName = ['product-optical-js','product-sunGlasses-js','product-functional-js'];
    let pages = [$('.product-optical'),$('.product-sunGlasses'),$('.product-functional')];

    $('.product-nav li').click(function(e){
    
        for(var i = 0; i <pageClassName.length;i++){
            if($(this).attr('class') == pageClassName[i]){
                console.log($(this).attr('class'));
                pages[i].css('display','block');
                pages[i].siblings().css('display','none');
            }
        }
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    })
    
});