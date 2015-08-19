/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/TeX/svg/Main/Regular/GeometricShapes.js
 *
 *  Copyright (c) 2011-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Hub.Insert(
  MathJax.OutputJax.EditableSVG.FONTDATA.FONTS['MathJax_Main'],
  {
    // WHITE UP-POINTING TRIANGLE
    0x25B3: [716,0,889,59,828,'75 0L72 2Q69 3 67 5T62 11T59 20Q59 24 62 30Q65 37 245 370T428 707Q428 708 430 710T436 714T444 716Q451 716 455 712Q459 710 644 368L828 27V20Q828 7 814 0H75ZM610 347L444 653Q443 653 278 347T113 40H775Q775 42 610 347'],

    // WHITE RIGHT-POINTING SMALL TRIANGLE
    0x25B9: [505,5,500,26,473,'26 489Q33 505 43 505Q51 505 260 385Q464 266 471 259Q473 257 473 250Q473 242 469 239Q459 231 260 115Q51 -5 43 -5Q39 -5 35 -1T28 7L26 11V489ZM412 250L67 450Q66 450 66 250T67 50Q69 51 240 150T412 250'],

    // WHITE DOWN-POINTING TRIANGLE
    0x25BD: [500,215,889,59,828,'59 480Q59 485 61 489T66 495T72 498L75 500H814Q828 493 828 480V474L644 132Q458 -210 455 -212Q451 -215 444 -215T433 -212Q429 -210 342 -49T164 282T64 466Q59 478 59 480ZM775 460H113Q113 459 278 153T444 -153T610 153T775 460'],

    // WHITE LEFT-POINTING SMALL TRIANGLE
    0x25C3: [505,5,500,26,473,'473 10Q466 -5 454 -5Q451 -5 445 -3Q444 -3 343 56T140 173T35 234Q26 239 26 250T35 266Q40 269 240 384T445 503Q451 505 453 505Q466 505 473 490V10ZM433 50T433 250T432 450T259 351T87 250T258 150T432 50Q433 50 433 250'],

    // LARGE CIRCLE
    0x25EF: [715,215,1000,56,944,'56 250Q56 353 95 442T196 589T335 681T491 715Q573 715 635 693Q694 673 747 635T846 543T917 412T944 250Q944 58 815 -78T500 -215Q457 -215 429 -210Q274 -183 165 -56T56 250ZM500 -176Q664 -176 784 -54T904 250Q904 418 799 536T543 674Q534 675 493 675Q425 675 357 647T229 567T133 432T96 250Q96 160 129 80T217 -56T346 -144T500 -176']
  }
);

MathJax.Ajax.loadComplete(MathJax.OutputJax.EditableSVG.fontDir+"/Main/Regular/GeometricShapes.js");