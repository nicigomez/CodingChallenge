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
![Bildschirmfoto 2022-05-08 um 21 48 05](https://user-images.githubusercontent.com/65089844/167313251-e61716f6-a6b9-4def-a3c9-f18f8058a249.png)


fifth step:
- some nicer design for the game
