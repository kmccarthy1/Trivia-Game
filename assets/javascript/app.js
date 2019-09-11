var allQuestions = [{
    question: "In which state is Mount Rushmore located?",
    choices: ["North Dakota", "South Dakota", "Wyoming", "Nevada"],
    correctAnswer: 1
  },

  {
    question: "Which US State is nicknamed 'The Land of 10,000 Lakes'?",
    choices: ["Minnesota", "Alaska", "Idaho", "Michigan"],
    correctAnswer: 0
  },

  {
    question: "How many US States are landlocked?",
    choices: ["14", "22", "16", "31"],
    correctAnswer: 2
  },

  {
    question: " What is the tallest mountain in the US? ",
    choices: ["Mt. McKinley", "Mt. Rainier", "Mt. Elbert", "Mt. Whitney"],
    correctAnswer: 0
  },

  {
    question: "In which state is Death Valley located?",
    choices: ["Nevada", "California", "New Mexico", "Arizona"],
    correctAnswer: 1
  },

  {
    question: "Which river runs through the Grand Canyon?",
    choices: ["The Boise River", "The Colorado River", "The Missouri River", "The river remains unnamed to this day"],
    correctAnswer: 1
  },

  {
    question: "What is the most visited mountain in North America? ",
    choices: ["Mt. Saint Helens", "Mt. Rainier", "Pikes Peak", "Mt. Whitney" ],
    correctAnswer: 2
  },

  {
    question: "Which one of the following is not one of Pittsburgh's 'Three Rivers'?",
    choices: ["Ohio", "Mononghahela", "Allegany", "Shenango"],
    correctAnswer: 3
  },

  {
    question: "What question must always be answered ''Yes''?",
    choices: ["What does Y-E-S spell?", "Will everyone die someday?", "Does everyone have a biological mother?", "Are you a human?"],
    correctAnswer: 0
  },

  {
    question: "How many sides does a circle have?",
    choices: ["The back", "None. It's a circle", "Two", "Four"],
    correctAnswer: 2
  },
];
var timeCount = 20;
var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};

$(document).ready(function() {

  $(".jumbotron").hide();
  $('#start').click(function() {
    $(".jumbotron").fadeIn();
    $(this).hide();
  }); 

  $(function() {
    $("#progressbar").progressbar({
      max: allQuestions.length - 1,
      value: 0
    });
  }); 

  setupOptions();

  $("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentquestion++;
    $(function() {
      $("#progressbar").progressbar({
        value: currentquestion
      });
    });
    if (currentquestion < allQuestions.length) {
      setupOptions();
      if (currentquestion == allQuestions.length - 1) {
        $('#next').html("Submit");
        $('#next').click(function() {
          $(".jumbotron").hide();
          $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          $("#result").fadeIn(1500);
        });

      };

    };
  });
});