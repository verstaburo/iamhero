(function($){
    var methods = {
        init:function(options){
            options = $.extend({
                width: 300,
                height:300,
                maxHeight:'auto',
                minHeight:'auto',
                maxWidth:'auto',
                minWidth:'auto',
                padding:30,
                top:50,
                close:true,
                overlayClose: true,
                escClose:true,
                animate:true,
                speed:100,
                notClose:false,
                beforeClose: function(){},
                afterClose: function(){},
                beforeOpen: function(){},
                afterOpen: function(){}
            }, options);
            return this.each(function(){
                var modal = $(this);
                var target = modal.data('modal-target');
                var wrap;

                if(options.notClose == false){
                    target = $('.'+target);
                    modal.click(function(){
                        options.beforeOpen.call(this);
                        if($('.modal-wrap').length != 1){
                            $('body').append('<div class="modal-wrap '+$(this).data('modal-target')+'-wrap"></div>');
                        }
                        wrap = $('.modal-wrap');

                        if($('.modal-overlay').length != 1){
                            wrap.append('<div class="modal-overlay"></div>');
                        }
                        wrap.append(target);
                        target.addClass('modal-dialog');
                        if(options.close != false){
                            if(target.find($('.modal-close')).length != 1){
                                target.append('<a href="" class="modal-close"></a>');
                            }
                        }
                        if(options.animate == false){
                            target.show(0,function(){
                                options.afterOpen.call(this);
                                // modal.find($('.modal-overlay')).show();
                                wrap.show()
                            });
                        }else{
                            target.fadeIn(options.speed, function(){
                                options.afterOpen.call(this);
                                // modal.find($('.modal-overlay')).fadeIn();
                                wrap.fadeIn()
                            });
                        }
                        $('.modal-dialog').css({
                            width: options.width,
                            height: options.height,
                            padding: options.padding,
                            maxHeight: options.maxHeight,
                            minHeight: options.minHeight,
                            maxWidth: options.maxWidth,
                            minWidth: options.minWidth,
                        });
                        if(options.top != false){
                            $('.modal-dialog').css({
                                top:options.top
                            })
                        }
                        return false;
                    });
                    function modalHide(){
                        $('.modal-overlay').hide(0,function(){
                            $('.modal-wrap').hide();
                            options.afterClose.call(this);
                        });
                        target.hide(0);  
                    }
                    function modalFadeOut(){
                        $('.modal-overlay').fadeOut(options.speed, function(){
                            $('.modal-wrap').fadeOut();
                            options.afterClose.call(this);
                        });
                        target.fadeOut(options.speed);
                    }
                    $('body').delegate('.modal-close','click', function(){
                        options.beforeClose.call(this);
                        if(options.animate == false){
                            modalHide();
                        }else{
                            modalFadeOut();
                        }
                        return false;
                    });
                    if(options.overlayClose != false){
                        $(document).click(function(event) {
                            if ($(event.target).closest('.modal-dialog').length) return;
                            options.beforeClose.call(this);
                            if(options.animate == false){
                                modalHide();
                            }else{
                                modalFadeOut();
                            }
                            event.stopPropagation();
                        });
                    }
                    if(options.escClose != false){
                        $(document).keydown(function(e) {
                            if(e.keyCode === 27 ) {
                                options.beforeClose.call(this);
                                if(options.animate == false){
                                    modalHide();
                                }else{
                                    modalFadeOut();
                                }
                                return false;
                            }
                        });
                    }
                }else{
                    target = $('.'+target);
                    modal.click(function(){
                        options.beforeOpen.call(this);
                        $('body').append('<div class="modal-wrap '+$(this).data('modal-target')+'-wrap"></div>');
                        wrap = $('.modal-wrap');
                        
                        wrap.append(target);
                        target.addClass('modal-dialog');
                        
                        if(options.animate == false){
                            target.show(0,function(){
                                options.afterOpen.call(this);
                            });
                        }else{
                            target.fadeIn(options.speed, function(){
                                options.afterOpen.call(this);
                            });
                        }
                        $('.modal-dialog').css({
                            width: options.width,
                            height: options.height,
                            padding: options.padding,
                            maxHeight: options.maxHeight,
                            minHeight: options.minHeight,
                            maxWidth: options.maxWidth,
                            minWidth: options.minWidth,
                            top:options.top
                        });
                        return false;
                    });
                }
            });
        },
        show:function(){
            $(this).click();
        }
    };
    $.fn.modalWin = function(method){
        if(methods[method]){
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }else if(typeof method === 'object' || !method){
            return methods.init.apply(this, arguments);
        }else{
            $.error('Метод с именем ' + method + ' не существует для jQuery');
        }
    };
})(jQuery);