<?php

function get_anonymous($n, $a, $af) 
{
    return new class($n, $a, $af)
    {
        private $name;
        private $alias;
        private $aff;

        public function __construct($n, $a, $af)
        {
            $this->name = $n;
            $this->alias = $a;
            $this->aff = $af;
        }

        function getName() 
        {
            return $this->name;
        }

        function getAlias() 
        {
            return $this->alias;
        }

        function getAffiliation() 
        {
            return $this->aff;
        }
    };
}

?>