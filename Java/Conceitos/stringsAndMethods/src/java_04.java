// Tarefa:
// 1. Crie duas strings: "Java" e "java".
// 2. Compare com:
//    - `==`
//    - `.equals()`
//    - `.equalsIgnoreCase()`
//
// Exiba os resultados e explique o que muda.

public class java_04 {
    public static void main (String[] args) {
        String Java = "Java";
        String java = "java";

        if (Java == java) {
            System.out.println("Java == java");
        }

        if (Java.equals(java)) {
            System.out.println("Java.equals(java)");
        }

        if (Java.equalsIgnoreCase(java)) {
            System.out.println("Java.equalsIgnoreCase(java)");
        }
    }
}
