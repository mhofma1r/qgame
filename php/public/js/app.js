$(document).ready(function () {
    $('.answerPool').hide();
    $('.questionSection').hide()
    $('.answers').hide()
    $('.modal').hide()
})

function qGameApp(dataSrcUri) {

    /**
     * @description contains the Applications Datascructure
     */

    $('#nextQuestionBtn').click(function () {
        getNextQuestion();
    });


    $('#additionalQuestionsBtn').click(function () {
        getAdditionalQuestions();
    });


    function getAdditionalQuestions() {
        $.get("get_questions.php", function (data) {
            try {
                if (data.length > 0) {
                    var randomIndex = Math.floor(Math.random() * data.length);
                    var questionData = data[randomIndex];
                    displayQuestion(questionData);
                } else {
                    alert("Error");
                }
            } catch (error) {
                console.error("Error reading the data: ", error);
            }
        });
    }

    function displayQuestion(questionData) {
        $('.questionSection p').html(questionData.text);
        $('.answerCardGrid').empty();

        questionData.decoyanswer.forEach(function (answer) {
            var newAnswerElement = $('<div class="answer"><a>' + answer + '</a></div>');
            $('.answerCardGrid').append(newAnswerElement);
        });

        $('.answer').on('mousedown', function (event) {
            //checkAnswerForAdditionalQuestions($(this), event, questionData);
            console.log("Click");
        });

        $('.questionSection').show();
        $('.answers').fadeIn();
    }

    document.qgame = {


        getDecoyquestionsPool: function () {
            return this.decoyquestionsPool
        },
        shuffleQuestions: function () {
            let array = this.getDecoyquestionsPool()
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            this.decoyquestionsPool = array;
        },
        lockedQKey: '',
        lockedCorrect: '',
        questionLocked: false,
        decoyquestionsPool: [],
        updateQuestions: function () {
            this.getDecoyquestionsPool()
            let array = this.decoyquestionsPool;
            array.forEach(function (item, index, array) {
                // Perform actions on each item
                let newElement = $('<div class="answer" itemKey="' + item + '"><a>' + item + '</a></div>');
                // Attach mouse events to the newElement
                newElement.on('mousedown', function (event) {
                    document.qgame.checkAnswer(newElement, event);
                });

                $('.answerCardGrid').append(newElement);
            }.bind(this));
        },
        checkAnswer: function (element, event) {
            let nextButton = $('').click(function (event) {
                console.log(' click behaviour')
            })
            if (event.type === 'mousedown') {
                $('.resultmsgBtn.button.false').click(function (e) {
                    console.log('false click!')
                    $(this).hide()

                })
                $('.resultmsgBtn.button.correct').click(function (e) {
                    console.log('correct click!')
                    $(this).hide()
                    location.reload();

                })
                let proposedAnswer = element[0].attributes.itemkey.value
                let correctAnswer = document.qgame.lockedCorrect
                if (proposedAnswer === 'KI') {
                    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                    return
                }
                if (proposedAnswer === correctAnswer) {
                    console.log('correct Triggered')
                    $('.answer-correct').dialog()
                    return
                }
                $('.answer-wrong').dialog()


            }
            $('.resultmsgBtn.button.false').show()
            $('.resultmsg').attr('title', 'false!')
            $('.resultmsg p').html('Sorry deine Antwort war leider nicht richtig.')
            $(".resultmsg").dialog();

        },
        questionEvents: function (item, headline) {
            if (document.qgame.questionLocked) {
                return;
            }
            let qText = item.attributes['qtext'].nodeValue
            let qKey = item.attributes['qKey'].nodeValue
            $('.questionSection p').html(qText)
            $('.questionSection h1').first().html(qKey)

            $('.questionSection').show()


        },
        lockQuestion: function (element) {
            let lockedQuestion = element.firstChild.textContent
            let links = $('.questions a').toArray();
            links.forEach(function (el) {
                if (el.textContent === lockedQuestion) {
                    $(el).addClass('active');
                    document.qgame.lockedCorrect = el.attributes.correct.value
                    document.qgame.lockedQKey = el.attributes.qkey.value;

                } else {
                    $(el).addClass('disabled');

                }

            })

            this.shuffleQuestions()
            this.updateQuestions()
            $('.answers').fadeIn()
            this.questionLocked = true;
        },
        appendQuestion: function (correctItem, decoyAnswers) {

        }
    };

    /**
     * @description this section loads Questions and
     */

    $.get(dataSrcUri, function (apiData) {
        let i = 0
        for (dataItem in apiData) {
            let item = apiData[i];
            let text = item.text;
            let decoyanswers=item.decoyanswer;
            let correct = item.correct;
            console.log(item);


            i++;
        }
    })

}

/*
console.log(data);
        let questions = JSON.parse(data);
        for (linkText in questions) {
            let dataItem = questions[linkText];
            let correctAnswer = dataItem.correct
            let itemQs = dataItem.decoyanswer
            itemQs.push(correctAnswer)

            let globalQs = document.qgame.decoyquestionsPool.concat(itemQs);
            document.qgame.decoyquestionsPool = globalQs;
            let qText = dataItem.text
            let newElement = $('<a class="button" correct="' + dataItem.correct + '" qKey="' + linkText + '" qText="' + qText + '" >' + linkText + '</a>');
            // Attach preventDefault() event handler to the new element
            newElement.on('click', function (event) {
                event.preventDefault();
                if (!document.qgame.questionLocked) {
                    document.qgame.lockQuestion(this)
                }
            });
            newElement.on('mouseover', function (ev) {
                document.qgame.questionEvents(this)
            })
// Append the new element to the '.questions' div
            $('.questions').append(newElement);
 */