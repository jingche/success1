package com.mavenSSM.model;

import java.util.Date;

public class Trlist  {
    private Integer id;

    private String eriref;

    private String registered_by;

    private String registered_date;

    private String finished_date;

    private String turnaround_time;

    private String answer_code;

    private String valid;

    private String heading;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEriref() {
        return eriref;
    }

    public void setEriref(String Eriref) {
        this.eriref = Eriref;
    }

    public String getRegistered_by() {
        return registered_by;
    }

    public void setRegistered_by(String Registered_by) {
        this.registered_by = Registered_by;
    }


    public String getRegistered_date() {
        return registered_date;
    }

    public void setRegistered_date(String Registered_date) {
        this.registered_date= Registered_date;
    }

    public String getFinished_date() {
        return finished_date;
    }

    public void setFinished_date(String Finished_date) {
        this.finished_date = Finished_date;
    }

    public String getTurnaround_time() {
        return turnaround_time;
    }

    public void setTurnaround_time(String Turnaround_time) {
        this.turnaround_time = Turnaround_time;
    }

    public String getAnswer_code() {
        return answer_code;
    }

    public void setAnswer_code(String Answer_code) {
        this.answer_code = Answer_code;
    }

    public String getValid() {
        return valid;
    }

    public void setValid(String Valid) {
        this.valid = Valid;
    }
    
    public String getHeading() {
    	return heading;
    }
    public void setHeading(String Heading) {
    	this.heading= Heading;
    }
    
}