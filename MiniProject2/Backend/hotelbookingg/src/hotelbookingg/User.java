package hotelbookingg;

public class User {
	private int user_id;
	private String user_name;
	private String password;
	private String email;
	private String phone;
	public User(String user_name,String password,String email,String phone) {
		this.user_name=user_name;
		this.password = password;
		this.email=email;
		this.phone=phone;
	}
	public User(String email,String password) {
		this.email = email;
		this.password = password;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
}
