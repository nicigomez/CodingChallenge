Program TicTacToe with React

This is the coding challenge for the job interview at Principia Mentis

first step: following the tutorial at https://reactjs.org/tutorial/tutorial.html

second step: 
- implement the gravity -> a stone can fall to positions that have the index: `stone_index + k * gridsize`
- when `index + size` is emty set new index 

third step:
- change gridsize to 5: Array now has length 25
- there are now 25 squares

fourth step:
- implement algorithm to detect three in a row
- first idea: make it rekursiv -> problem with many cases that are possible
- second idea: go from last square ticked -> problem e.g.   `- - o - -`
                                                            `o x x X -`
                                                            `- - - - -`
                                                            `- - - - -`
                                                            `- - - - -`
- last idea (implemented yet): check all posibilities from last square ticked
[CodingChallenge.pdf](https://github.com/nicigomez/CodingChallenge/files/8647671/CodingChallenge.pdf)

fifth step:
- some nicer design for the game
