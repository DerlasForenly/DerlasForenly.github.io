<?php

class HardWorker {
    private int $age;
    private int $salary;
    private ?string $name;

    public function setName($value) {
        $this->name = $value;
    }

    public function getName() {
        return $this->name;
    }

    public function setAge($value) {
        if ($value >= 1 && $value <= 100) {
            $this->age = $value;
            return true;
        }
        return false;
    }

    public function getAge() {
        return $this->age;
    }

    public function setSalary($value) {
        if ($value >= 100 && $value <= 10000) {
            $this->salary = $value;
            return true;
        }
        return false;
    }

    public function getSalary() {
        return $this->salary;
    }

    public function toArray() {
        return array($this->name, $this->age, $this->salary);
    }
}

?>