$(document).ready(function () {
    $(function () {

    });
    $('.answerPool').hide();
    $('.questionSection').hide()
    $('.answers').hide()
    $('.resultmsgBtn.button').hide()
    /**
     * @description contains the Applications Datascructure
     */

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
                    window.location.replace("https://www.youtube.com/watch?v=GtL1huin9EE?autoplay=1")
                    return
                }
                if (proposedAnswer === correctAnswer) {
                    console.log('correct Triggered')

                    $('.resultmsg p').html('Sehr gut! Die Antwort ist Richtig')
                    $('.resultmsgBtn.button.false').hide()
                    $('.resultmsgBtn.button.correct').show()
                    $('.resultmsg').attr('title', 'correct!')
                    $('.resultmsg').show()
                    $(".resultmsg").dialog();

                    return
                }

            }
            $('.resultmsgBtn.button.correct').hide()
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
        }
    };

    /**
     * @description this section loads Questions and
     */
    $.get("questions.php", function (data) {
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
        }
    });
    $(".resultmsgBtn").click(function () {
        $(".resultmsg").dialog("close");
    });
})
