<?php

class StrFrequency {
    public $str;

    function __construct($s) {
        $str = $s;
    }

    function letterFrequencies() {
        $letters = array(
            array("A", 0), 
            array("B", 0),
            array("C", 0),
            array("D", 0),
            array("E", 0),
            array("F", 0),
            array("G", 0),
            array("H", 0),
            array("I", 0),
            array("J", 0),
            array("K", 0),
            array("L", 0),
            array("M", 0),
            array("N", 0),
            array("O", 0),
            array("P", 0),
            array("Q", 0),
            array("R", 0),
            array("S", 0),
            array("T", 0),
            array("U", 0),
            array("V", 0),
            array("W", 0),
            array("X", 0),
            array("Y", 0),
            array("Z", 0));
        $str = strtoupper($str);
        $temp = str_split($str);
        for ($i = 0; $i < sizeof($letters); $i++) {
            for ($j = 0; $j < sizeof($temp); $j++) {
                if ($temp[$j] == $letters[$i][0]) {
                    $letters[$i][1] += 1;
                }
            }
        }
        for ($i = 0; $i < sizeof($letters); $i++) {
            if ($letters[$i][1] == 0) {
                unset($letters[$i]);
            }
        }
        return $letters;
    }

    function wordFrequencies() {

    }

    function reverseString() {

    }
}

?>