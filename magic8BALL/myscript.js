
var answers = ['Yes, it is for sure',
 'they have different season there','you cant be lonly','u will have many friends there','believe me you will be fine there','u have beautiful future there'
 ,'too much information ask later','you can survival in there','100%sure  that game will develop you brain','you are so funny ',
 'Do you really want to know?','that will happen someday','Possibly.',
  'Maybe not.', 'Certainly, I am sure of it.', 'It will never be so.', 'Yes!Yes!Yes!', 'It can never be.',
  'It is for sure.', 'Never!', 'Ask wisdom again later.', 'It is unclear now.','I would rather not say.',
   'Perhaps', 'Do not count on it.' ];

document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};

/**
 * @author Weiyif Zhang
 */
