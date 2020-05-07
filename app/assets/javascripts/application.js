// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require popper
//= require bootstrap-sprockets



$(function(){
  $("#hoge").css("color","red")
  $(".result").hide();
  //ボタンがクリックされた時
  $("button").click(function(){
  //一度結果を非表示にする
 $(".result").hide();
 
  //問題数を取得
  var qNum = $("ul li").length;

  if( $("ul li input:checked").length < qNum ){
  //全てチェックしていなかったらアラートを出す
    alert("未回答の問題があります");
    } else {
    //チェックされているinputの数を取得
    var typeANum = $(".typeA:checked").length,
    typeBNum = $(".typeB:checked").length;
    typeCNum = $(".typeC:checked").length;
    typeANum *= 2;
    typeBNum *= 1;
    typeCNum *= 0;
    var typeLine = $(".line-qr:checked")
    var typeTotal = typeANum + typeBNum + typeCNum ;
    if(typeLine){
      $(".result-line").fadeIn();
    }
    if( typeTotal == 60) {
    //もしもAの方が多かったらAタイプを表示
    $(".resultA").fadeIn();
      }else if( typeTotal == 59 ) {
    //もしもBの方が多かったらBタイプを表示
      $(".resultB").fadeIn();
      }else if( typeTotal == 58 ) {
      //もしもBの方が多かったらBタイプを表示
        $(".resultC").fadeIn();
      }else if( typeTotal == 57 ) {
        //もしもBの方が多かったらBタイプを表示
          $(".resultD").fadeIn();
      }else if( typeTotal == 56 ) {
          //もしもBの方が多かったらBタイプを表示
            $(".resultE").fadeIn();
      }else if( typeTotal == 55 ) {
            //もしもBの方が多かったらBタイプを表示
              $(".resultF").fadeIn();
      }else if( typeTotal == 54 ) {
              //もしもBの方が多かったらBタイプを表示
                $(".resultG").fadeIn();
      }else if( typeTotal == 53 ) {
                //もしもBの方が多かったらBタイプを表示
                  $(".resultH").fadeIn();
      }else if( typeTotal == 52 ) {
                  //もしもBの方が多かったらBタイプを表示
                    $(".resultI").fadeIn();
      }else if( typeTotal == 51 ) {
                          //もしもBの方が多かったらBタイプを表示
                  $(".resultJ").fadeIn();
      }else if( typeTotal == 50 ) {
                            //もしもBの方が多かったらBタイプを表示
                $(".resultK").fadeIn();
      }else if( typeTotal == 49 ) {
                              //もしもBの方が多かったらBタイプを表示
                    $(".resultL").fadeIn();
      }else if( typeTotal == 48 ) {
                                //もしもBの方が多かったらBタイプを表示
                      $(".resultM").fadeIn();
      }else if( typeTotal == 47 ) {
                                  //もしもBの方が多かったらBタイプを表示
                      $(".resultN").fadeIn();
      }else if( typeTotal == 46 ) {
                                    //もしもBの方が多かったらBタイプを表示
                      $(".resultO").fadeIn();
      }else if( typeTotal == 45 ) {
                                      //もしもBの方が多かったらBタイプを表示
                $(".resultP").fadeIn();
      }else if( typeTotal == 44 ) {
                                        //もしもBの方が多かったらBタイプを表示
                  $(".resultQ").fadeIn();
      }else if( typeTotal == 43 ) {
                                          //もしもBの方が多かったらBタイプを表示
                  $(".resultR").fadeIn();
      }else if( typeTotal == 42 ) {
                                            //もしもBの方が多かったらBタイプを表示
                    $(".resultS").fadeIn();
      }else if( typeTotal == 41 ) {
                                              //もしもBの方が多かったらBタイプを表示
                      $(".resultT").fadeIn();
      }else if( typeTotal == 40 ) {
                                                //もしもBの方が多かったらBタイプを表示
                      $(".resultU").fadeIn();
      }else if( typeTotal == 39 ) {
                                                  //もしもBの方が多かったらBタイプを表示
                    $(".resultV").fadeIn();
      }else if( typeTotal == 38 ) {
                                                    //もしもBの方が多かったらBタイプを表示
                    $(".resultW").fadeIn();
      }else if( typeTotal == 37 ) {
                                                      //もしもBの方が多かったらBタイプを表示
                        $(".resultX").fadeIn();
      }else if( typeTotal == 36 ) {
                                                        //もしもBの方が多かったらBタイプを表示
                            $(".resultY").fadeIn();
      }else if( typeTotal == 35 ) {
                                                          //もしもBの方が多かったらBタイプを表示
                            $(".resultZ").fadeIn();
      }else if( typeTotal == 34 ) {
                                                            //もしもBの方が多かったらBタイプを表示
                      $(".result1").fadeIn();
      }else if( typeTotal == 33 ) {
                                                              //もしもBの方が多かったらBタイプを表示
                      $(".result2").fadeIn();
      }else if( typeTotal == 32 ) {
                                                                //もしもBの方が多かったらBタイプを表示
                      $(".result3").fadeIn();
      }else if( typeTotal == 31 ) {
                                                                  //もしもBの方が多かったらBタイプを表示
                      $(".result4").fadeIn();
      }else if( typeTotal == 30 ) {
                                                                    //もしもBの方が多かったらBタイプを表示
                    $(".result5").fadeIn();
      }else if( typeTotal == 29 ) {
                                                                      //もしもBの方が多かったらBタイプを表示
                      $(".result6").fadeIn();
      }else if( typeTotal == 28 ) {
                                                                        //もしもBの方が多かったらBタイプを表示
                    $(".result7").fadeIn();
      }else if( typeTotal == 27 ) {
                                                                          //もしもBの方が多かったらBタイプを表示
                          $(".result8").fadeIn();
      }else if( typeTotal == 26 ) {
                                                                            //もしもBの方が多かったらBタイプを表示
                        $(".result9").fadeIn();
      }else if( typeTotal == 25 ) {
                                                                              //もしもBの方が多かったらBタイプを表示
                      $(".result10").fadeIn();
      }else if( typeTotal == 24 ) {
                                                                                //もしもBの方が多かったらBタイプを表示
                  $(".result11").fadeIn();
      }else if( typeTotal == 23 ) {
                  //もしもBの方が多かったらBタイプを表示
              $(".result12").fadeIn();
      }else if( typeTotal == 22 ) {
                    //もしもBの方が多かったらBタイプを表示
              $(".result13").fadeIn();
      }else if( typeTotal == 21 ) {
                      //もしもBの方が多かったらBタイプを表示
                $(".result14").fadeIn();
      }else if( typeTotal == 20 ) {
                      //もしもBの方が多かったらBタイプを表示
                $(".result15").fadeIn();
      }else if( typeTotal == 19 ) {
                        //もしもBの方が多かったらBタイプを表示
                $(".result16").fadeIn();
      }else if( typeTotal == 18 ) {
                          //もしもBの方が多かったらBタイプを表示
                  $(".result17").fadeIn();
      }else if( typeTotal == 17 ) {
                            //もしもBの方が多かったらBタイプを表示
                    $(".result18").fadeIn();
      }else if( typeTotal == 16 ) {
                              //もしもBの方が多かったらBタイプを表示
                        $(".result19").fadeIn();
      }else if( typeTotal == 15 ) {
                                //もしもBの方が多かったらBタイプを表示
                        $(".result20").fadeIn();
      }else if( typeTotal == 14 ) {
                                  //もしもBの方が多かったらBタイプを表示
                        $(".result21").fadeIn();
      }else if( typeTotal == 13 ) {
                                    //もしもBの方が多かったらBタイプを表示
                          $(".result22").fadeIn();
      }else if( typeTotal == 12 ) {
                                      //もしもBの方が多かったらBタイプを表示
                          $(".result23").fadeIn();
      }else if( typeTotal == 11 ) {
                                        //もしもBの方が多かったらBタイプを表示
                          $(".result24").fadeIn();
      }else if( typeTotal == 10 ) {
                                          //もしもBの方が多かったらBタイプを表示
                            $(".result25").fadeIn();
      }else if( typeTotal == 9) {
                                            //もしもBの方が多かったらBタイプを表示
                            $(".result26").fadeIn();
      }else if( typeTotal == 8 ) {
                                              //もしもBの方が多かったらBタイプを表示
                              $(".result27").fadeIn();
      }else if( typeTotal == 7 ) {
                                                //もしもBの方が多かったらBタイプを表示
                              $(".result28").fadeIn();
      }else if( typeTotal == 6 ) {
                                                  //もしもBの方が多かったらBタイプを表示
                            $(".result29").fadeIn();
      }else if( typeTotal == 5 ) {
                                                    //もしもBの方が多かったらBタイプを表示
                            $(".result30").fadeIn();
      }else if( typeTotal == 4 ) {
                              //もしもBの方が多かったらBタイプを表示
                                $(".result31").fadeIn();
      }else if( typeTotal == 3 ) {
                          //もしもBの方が多かったらBタイプを表示
                              $(".result32").fadeIn();
      }else if( typeTotal == 2 ) {
                                                          //もしもBの方が多かったらBタイプを表示
                              $(".result33").fadeIn();
      }else if( typeTotal == 1 ) {
                                                            //もしもBの方が多かったらBタイプを表示
            $(".result34").fadeIn();
      }else{
          //もしもBの方が多かったらBタイプを表示
            $(".result35").fadeIn();
          }
      }
    });
});
