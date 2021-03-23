<?php

function checkDivision($n1 = 1, $n2 = 60)
{
    for ($i = $n1; $i <= $n2; $i++) {
        $commas = 0;
        $result = "The number ${i}";
        if ($i % 2 == 0) {
            $result .= " is divisible by 2";
            if ($i % 3 == 0) {
                $result .= ", is divisible by 3";
            }
            if ($i % 10 == 0) {
                $result .= ", is divisible by 10";
            }
        }
        else if ($i % 3 == 0) {
            $result .= " is divisible by 3";
        }
        else if ($i % 10 == 0) {
            $result .= " is divisible by 10";
        }
        else {
            $result .= " -";
        }
        echo $result . "\n";
    }
}

?>