        const submitButton = document.getElementById('submit-button');
        const resultContainer = document.getElementById('result-container');
        const question0Inputs = document.getElementsByName('question0');
        const question1Inputs = document.getElementsByName('question1');

        const questions = [
            {
                correctAnswer: 'b'
            },
            {
                correctAnswer: 'c'
            }
            // Ajoutez d'autres questions ici
        ];

        function showResults() {
            let score = 0;

            if (question0Inputs[1].checked) {
                score++;
            }

            if (question1Inputs[2].checked) {
                score++;
            }

            resultContainer.innerHTML = `Score: ${score} / ${questions.length}`;
        }

        submitButton.addEventListener('click', showResults)