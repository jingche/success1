package com.mavenSSM.model;

import java.util.Date;

public class Listp1114 {
    private Integer id;
    
    private String   date;

    private Integer passed;

    private Integer failed_TR;

    private Integer  failed_Environment;

    private Integer  failed_Artifact;

    private Integer  inconclusive;

    private String   comment;

    private String   g1_LTE_UP;
    
    private String   g1_WCDMA_UP;
    
    private String   effectiveness;
    
    private String   stability;

     

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getdate() {
    	return date;
    }
    
    public void setdate(String date) {
    	this.date=date;
    }

    public Integer getPassed() {
        return passed;
    }

    public void setPassed(Integer Passed) {
        this.passed = Passed;
    }

    public Integer getFailed_TR() {
        return failed_TR;
    }

    public void setFailed_TR(Integer Failed_TR) {
        this.failed_TR = Failed_TR;
    }

    public Integer getFailed_Environment() {
        return failed_Environment;
    }

    public void setFailed_Environment(Integer Failed_Environment) {
        this.failed_Environment= Failed_Environment;
    }

    public Integer getFailed_Artifact() {
        return failed_Artifact;
    }

    public void setFailed_Artifact(Integer Failed_Artifact) {
        this.failed_Artifact= Failed_Artifact;
    }

    public Integer getInconclusive() {
        return inconclusive;
    }

    public void setInconclusive(Integer Inconclusive) {
        this.inconclusive = Inconclusive;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String Comment) {
        this.comment= Comment;
    }

    public String getG1_LTE_UP() {
        return g1_LTE_UP;
    }

    public void setG1_LTE_UP(String G1_LTE_UP) {
        this.g1_LTE_UP =G1_LTE_UP;
    }
    
    public String getG1_WCDMA_UP() {
        return g1_WCDMA_UP;
    }

    public void setG1_WCDMA_UP(String G1_WCDMA_UP) {
        this.g1_WCDMA_UP =G1_WCDMA_UP;
    }
    

    public String getEffectiveness() {
        return effectiveness;
    }

    public void setEffectiveness(String Effectiveness) {
        this.effectiveness = Effectiveness;
    }
    
    public String getStability() {
    	return stability;
    }
    
    public void setStability(String Stability) {
    	this.stability=Stability;
    }
       
}