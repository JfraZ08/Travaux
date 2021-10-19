 var depart1=0;
        var pos1=0;
        var depart2=0;
        var pos2=0;
        var depart3=0;
        var pos3=0;
        var depart4=0;
        var pos4=0;

        $(document).ready(function () {
            $pos1=0, $pos2=0, $pos3=0, $pos4=0;
            $('#bas1').click(function () {
                $pos1-= 100; if($pos1<-300)$pos1=0;
                $("#des1").animate({'background-position-y' : $pos1});
            })

            $('#haut1').click(function () {
                $pos1-= -100; if($pos1<-300)$pos1=0;
                $("#des1").animate({'background-position-y' : $pos1});
            })

            $('#bas2').click(function () {
                $pos2 -= 100; if($pos2<-300)$pos2=0;
                $("#des2").animate({'background-position-y' : $pos2});
            })

            $('#haut2').click(function () {
                $pos2 -= -100; if($pos2<-300)$pos2=0;
                $("#des2").animate({'background-position-y' : $pos2});
            })

            $('#bas3').click(function () {
                $pos3 -= 100; if($pos3<-300)$pos3=0;
                $("#des3").animate({'background-position-y' : $pos3});
            })

            $('#haut3').click(function () {
                $pos3 -= -100; if($pos3<-300)$pos3=0;
                $("#des3").animate({'background-position-y' : $pos3});
            })

            $('#bas4').click(function () {
                $pos4 -= 100; if($pos4<-300)$pos4=0;
                $("#des4").animate({'background-position-y' : $pos4});
            })

            $('#haut4').click(function () {
                $pos4 -= -100; if($pos4<-300)$pos4=0;
                $("#des4").animate({'background-position-y' : $pos4});
            })


            $('#valider').click(function () {
                if ($pos1 == -100 && $pos2 == -100 && $pos3 == -100 && $pos4 == -100) {
                    $('#resultat').fadeOut().delay(300000).html('Bon');
                } else {
                    $('#resultat').fadeOut().delay(300000).html('Faux');
                }
            });
        });
