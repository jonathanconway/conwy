classDiagram
    class Component1{
      <<Component>>
      +prop1 : Type1
      +prop2 : Interface1
    }
    Component1 --> Type1
    Component1 --> Interface1

    class Type1{
      <<Type>>
    }
    Type1 --|> Type2

    class Type2{
      <<Type>>
    }

    class Interface1{
      <<Interface>>
      +field1 : FieldType1
      +field2 : FieldType2
    }
    Interface1 --|> Interface2

    class Interface2{
      <<Interface>>
      +field3 : FieldType3
      +field4 : FieldType4
    }

    Component1 --> Component1_Component2_call
    Component1_Component2_call --> Component2

    class Component1_Component2_call {
      prop3
      prop4
    }

    class Component2{
      <<Component>>
      +prop3 : ReactNode
      +prop4 : ReactNode
    }

    Component1_Component2_call --> Component3 : prop3

    class Component3{
      <<Component>>
    }

    Component1_Component2_call --> Component4 : prop4

    class Component4{
      <<Component>>
    }

    class function1{
      <<Function>>
      +param1 : Type2
      +param2 : Interface1
    }
    Component1 --> function1
    function1 --> Type2