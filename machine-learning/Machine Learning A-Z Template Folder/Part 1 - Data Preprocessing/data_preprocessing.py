# -*- coding: utf-8 -*-
"""
Created on Sat May 11 17:34:56 2019

@author: anoop.v.mathew@gmail.com
"""
# data pre-Processing

# importing the libraries
import numpy as np  # mathematical library
import matplotlib.pyplot as plt  # plotting library
import pandas as pd # read/write files

# import dataset
ds = pd.read_csv('Data.csv')
# split into X [matrix of features - dependent variable set] and y [independent variable set]
X = ds.iloc[:, :-1].values # all rows, and all but the last column
y = ds.iloc[:, 3].values # all rows and last column

# take care of missing data
from sklearn.preprocessing import Imputer
imputer = Imputer(missing_values = np.nan, strategy = 'mean', axis = 0) # impute along columns
imputer = imputer.fit(X[:, 1:3]) # apply to columns 1 and 2. Upper bound (here 3) is excluded

X[:, 1:3] = imputer.transform(X[:, 1:3]) # transform by replacing missing values with mean of column

# encoding categorical data 

# replace text based data in 1st column with numerical in the same column
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
lbl_encoder_X = LabelEncoder()
X[:, 0] = lbl_encoder_X.fit_transform(X[:, 0])

# change column with multiple values to an array with a column for each value
# the value is 1 for a column if that particular column's value was present in the row
onehotencoder = OneHotEncoder(categorical_features = [0]) # use 1st column
X = onehotencoder.fit_transform(X).toarray() 

# similarly encode y, the independent variable
lbl_encoder_y = LabelEncoder()
y = lbl_encoder_y.fit_transform(y)

# split the dataset into a Training set (80%) and a Test set (20%)
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# apply feature scaling to ensure that all columns in matrix of features are in a similar range
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)