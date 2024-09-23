$(document).ready(function () {

    $('.answerPool').hide();
    $('.questionSection').hide()
    $('.answers').hide()
    $('.modal').hide()

    let startup=$('body').attr('topicSelected')

    if (startup=='false'){
        console.log(startup);
        return
    }
    topic_id= getUrlParameter('topic')
    console.log('topic id: '+topic_id);
    loadQuestionData(topic_id)
    function loadQuestionData($topic_id){
        $.get("questions.php?topic="+topic_id, function (data) {
            /**
             * Get Selected Topic from DOM
             */

            let questions = JSON.parse(data);
            document.qgame.data=questions;
            let i=0;
            for (linkText in questions) {
                let dataItem = questions[linkText];
                let correctAnswer = dataItem.correct
                let itemQs = dataItem.decoyanswer
                console.log(dataItem)
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
            }
        });

    }
    /**
     * @description contains the Applications Datascructure
     */
    $('#nextQuestionBtn').click(function () {
        getNextQuestion();
    });


    $('#additionalQuestionsBtn').click(function () {
        getAdditionalQuestions();
    });
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
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
        shuffleQuestions: function (question) {
            array=this.shuffleArray(question.decoyanswer)

            console.log(array)
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
        updateQuestions: function (question) {
            let array = question.decoyanswer
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
        shuffleArray:function(array) {
            let currentIndex = array.length;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {
                let randomIndexOld = Math.floor(Math.random() * currentIndex);
                let randomIndexNew = Math.floor(Math.random() * currentIndex);
                itemNew=array[randomIndexNew]
                itemOld=array[randomIndexOld]
                array[randomIndexNew]=itemOld
                array[randomIndexOld]=itemNew
                currentIndex--;
                // And swap it wit,h the current element.
            }
            return array;
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
            console.log('qLocked')
            let qKey=$(element).attr('qKey')
            let question=this.data[qKey];
            let lockedQuestion = element.firstChild.textContent
            let links = $('.questions a').toArray();
            links.forEach(function (el) {
                if (el.textContent === lockedQuestion) {
                    $(el).addClass('active');
                    document.qgame.lockedCorrect = el.attributes.correct.value
                    //document.qgame.lockedQKey = el.attributes.qkey.value;

                } else {
                    $(el).addClass('disabled');

                }

            })
            this.shuffleQuestions(question)
            this.updateQuestions(question)
            $('.answers').fadeIn()
            this.questionLocked = true;
        }
    };
})
