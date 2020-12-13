//画像の表示
function answer() {
  var img = document.getElementById("image_place");

  //1問目の変数・定数
  let firstAnswer = document.forms.id_question.id_firstQ.value;
  const first = "リベラルアーツシティ"

  //2問目の変数
  let secondAnswer = document.querySelectorAll('input[type="checkbox"]');
  console.log(secondAnswer);

  //3問目の変数
  let thirdAnswer = document.getElementById("id_thirdQ").value;

  //正解時のテキスト変数
  let putText;

  //正解数の定義
  let count = 0;

  if (firstAnswer == first) {
    count++;
  }
  if (secondAnswer[0].checked &&
      secondAnswer[1].checked != true &&
      secondAnswer[2].checked &&
      secondAnswer[3].checked != true &&
      secondAnswer[4].checked &&
      secondAnswer[5].checked &&
      secondAnswer[6].checked &&
      secondAnswer[7].checked != true
  ) {
    count++;
  }
  if (thirdAnswer == "B6") {
    count++;
  }


  //正解数による画像の選択
  switch (count) {
    case 1:
      document.getElementById("id_image1").style.display="block";
      document.getElementById("id_image2").style.display="none";
      document.getElementById("id_image3").style.display="none";
      putText = document.getElementById("answerText1");
      putText.innerHTML="頑張りましょう";
      break;
    case 2:
      document.getElementById("id_image1").style.display="none";
      document.getElementById("id_image2").style.display="block";
      document.getElementById("id_image3").style.display="none";
      putText = document.getElementById("answerText2");
      putText.innerHTML="惜しいで！ゴールは目の前や！";
      break;
    case 3:
      document.getElementById("id_image1").style.display="none";
      document.getElementById("id_image2").style.display="none";
      document.getElementById("id_image3").style.display="block";
      putText = document.getElementById("answerText3");
      putText.innerHTML="完璧や！もうワシが教えることはないな";
      break;
    default:
      document.getElementById("id_image1").style.display="none";
      document.getElementById("id_image2").style.display="none";
      document.getElementById("id_image3").style.display="none";
      putText = document.getElementById("answerText");
      putText.innerHTML="";
      break;
  }
}

//「成果物製作で経験したこと」のアコーディオン
$(function() {
  $('.list-item').click(function() {
    var $FeelAnswer = $(this).find('.FeelAnswer');
    if($FeelAnswer.hasClass('open')) {
      $FeelAnswer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $FeelAnswer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');

    } else {
      $FeelAnswer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $FeelAnswer.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');

    }
  });
});
