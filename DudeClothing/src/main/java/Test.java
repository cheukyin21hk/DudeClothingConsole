import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {
	public static void main(String args[]) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		System.out.println(date); // 2014/08/06 15:59:48
	}
}
