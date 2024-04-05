package EQueen;

import java.awt.Color;
import java.awt.Container;
import java.awt.FlowLayout;
import java.awt.Font;
//import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
//import java.text.SimpleDateFormat;
//import java.util.Calendar;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.Timer;

public class Input extends JFrame implements ActionListener{
	Container cn;
	JLabel lb;
	JTextField tf;
	JButton ok_bt;
	public Input() {
		super("Số lượng quân hậu");
		cn = init();
	}
	
	public Container init() {
		Container cn = this.getContentPane();
		
		lb = new JLabel("Bạn hãy nhập vào số lượng quân hậu  (1->30) và tốc độ ra quân");
		lb.setFont(new Font("UTM Nokia", 1, 20));
		
		JPanel label_pn = new JPanel();
		
		label_pn.setLayout(new FlowLayout());
		label_pn.add(lb);
		
		ok_bt = new JButton("OK");
		ok_bt.addActionListener(this);
		ok_bt.setFont(new Font("UTM Nokia", 1, 15));
		ok_bt.setBackground(Color.white);
                // yellow -> green
		//ok_bt.setBorder(BorderFactory.createMatteBorder(5, 5, 5, 5, Color.yellow));
                //
		ok_bt.setBackground(Color.LIGHT_GRAY);
		
		tf = new JTextField("5 1000");
		tf.setFont(new Font("UTM Nokia", 1, 35));
		tf.setHorizontalAlignment(JTextField.CENTER);
		
		cn.add(label_pn, "North");
		cn.add(tf, "Center");
		cn.add(ok_bt, "South");
		
		this.setVisible(true);
		this.setSize(700, 200);
//		setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
		this.setLocationRelativeTo(null);
//		this.setResizable(false);
		return cn;
	}

	
	@Override
	public void actionPerformed(ActionEvent e) {
		String str = tf.getText();
		String numbers = "[0-9]+ [0-9]+";
		int num = 100;
		if (str.matches(numbers)) {
			String[] ss = tf.getText().split(" ");
			num = Integer.parseInt(ss[0]);
			int delay = Integer.parseInt(ss[1]);
			if (num >= 1 && num <= 30) {
				new EQueen(num, delay);
				this.dispose();
			}
			else
				JOptionPane.showMessageDialog(null, "Bạn hãy chọn số quân hậu từ 1->30");
		} else {
			JOptionPane.showMessageDialog(null, "Bạn hãy chọn lại");
		}
	}
	
	
	public static void main(String[] args) {
		new Input();
	}
}