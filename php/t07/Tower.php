<?php

class Tower extends Building{
    private bool $elevator;
    private int $arc_capacity;
    private float $height;

    public function getElevator() {
        return $this->elevator;
    }
    public function setElevator($value) {
        $this->elevator = $value;
    }
    public function getArcCapacity() {
        return $this->arc_capacity;
    }
    public function setArcCapacity($value) {$this->arc_capacity = $value;}
    public function getHeight() {return $this->elevator;}
    public function setHeight($value) {$this->height = $value;}

    public function getFloorHeight() : float
    {
        return $this->height/$this->floors;
    }

    public function toString() : string
    {
        $e;
        if ($this->elevator == true) {
            $e = '+';
        }
        else {
            $e = '-';
        }
        $props = [
            "Floors : " . $this->floors,
            "Material : " . $this->material,
            "Address : " . $this->address,
            "Elevator : " . $e,
            "Arc reactor capacity : " . $this->arc_capacity,
            "Height : " . $this->height,
            "Floor height : " . $this->getFloorHeight()
        ];

        $str = "";

        foreach ($props as $p)
            $str = $str . $p . "\n";

        return $str;
    }
}

?>