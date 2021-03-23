<?php

class Overload {
    private $data = array();

    public function __set (string $name, $value ) : void {
        $this->data[$name] = $value;
    }

    public function __get (string $name) {
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }
        return "NO DATA";
    }

    public function __isset ($name) {
        if (isset($this->data[$name])) {
            
        }   
        else {
            $this->data[$name] = "NOT SET";
        }
        return $this->data[$name];
        
    }

    public function __unset ($name) {
        $this->data[$name] = null;
    }
}

?>